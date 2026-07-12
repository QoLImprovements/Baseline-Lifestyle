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
  "id": "usda-sr-legacy-172201",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-crumbled",
      "kind": "unit",
      "label": "cup, crumbled"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cheese, mexican, queso anejo",
  "nutritionPerBasis": {
    "calcium_mg": 680.0,
    "carbs_g": 4.63,
    "energy_kcal": 373.0,
    "fat_g": 30.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.47,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 444.0,
    "potassium_mg": 87.0,
    "protein_g": 21.4,
    "salt_g": 2.825,
    "sat_fat_g": 19.0,
    "sodium_mg": 1130.0,
    "sugar_g": 4.63,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172201",
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
