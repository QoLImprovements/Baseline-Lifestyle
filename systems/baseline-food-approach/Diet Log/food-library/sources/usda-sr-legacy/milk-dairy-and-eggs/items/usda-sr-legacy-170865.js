/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "portion-amount-to-make-1-tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170865",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.3,
      "key": "portion-amount-to-make-1-tbsp",
      "kind": "unit",
      "label": "portion, amount to make 1 tbsp"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-5-oz",
      "kind": "unit",
      "label": "1.5 oz"
    }
  ],
  "name": "Dessert topping, powdered",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 52.5,
    "energy_kcal": 2420.0,
    "fat_g": 39.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.03,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 166.0,
    "protein_g": 4.9,
    "salt_g": 0.305,
    "sat_fat_g": 36.7,
    "sodium_mg": 122.0,
    "sugar_g": 52.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 9.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170865",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
