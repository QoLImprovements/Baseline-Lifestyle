/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-167687",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Whipped topping, frozen, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 23.6,
    "energy_kcal": 938.0,
    "fat_g": 13.1,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.1,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 101.0,
    "protein_g": 3.0,
    "salt_g": 0.18,
    "sat_fat_g": 11.3,
    "sodium_mg": 72.0,
    "sugar_g": 23.6,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167687",
  "state": "Frozen",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
