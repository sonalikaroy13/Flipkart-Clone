import { makeStyles, InputBase, List, ListItem } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    search: {
        borderRadius: 2,
        backgroundColor: '#fff',
        marginRight: theme.spacing(2),
        marginLeft: 10,
        width: '38%',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
          marginRight: 'auto',
          width: '50%',
          marginLeft: 'auto'
      }
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        color: 'blue'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%',
      },
      inputInput: {
        paddingLeft: 20,
      },
      list: {
        position: 'absolute',
        color: '#000',
        background: '#FFF',
        marginTop: 36
      }
}))

const SearchBar = () => {
    const classes = useStyle();
    const [text, setText] = useState();
    const [open, setOpen] = useState(true);

    const getText = (text) => {
      setText(text);
      setOpen(false);
    }

    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className={classes.search}>
            <InputBase
              placeholder="Search for products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => getText(e.target.value)}
            />
            <div className={classes.searchIcon}>
              <Search />
            </div>
            {
              text && 
              <List className={classes.list} hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{textDecoration:'none', color: 'inherit'}}
                        onClick={() => setOpen(true)}
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }
                
              </List>
            }
        </div>
    )
}

export default SearchBar;