/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-crumbled",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172223",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "cup-crumbled",
      "kind": "unit",
      "label": "cup, crumbled"
    }
  ],
  "name": "Cheese, fresh, queso fresco",
  "nutritionPerBasis": {
    "calcium_mg": 566.0,
    "carbs_g": 2.98,
    "energy_kcal": 299.0,
    "fat_g": 23.8,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.2,
    "magnesium_mg": 24.0,
    "omega3_g": 0.125,
    "phosphorus_mg": 385.0,
    "potassium_mg": 129.0,
    "protein_g": 18.1,
    "salt_g": 1.8775,
    "sat_fat_g": 12.9,
    "sodium_mg": 751.0,
    "sugar_g": 2.32,
    "vitamin_a_ug": 224.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172223",
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
