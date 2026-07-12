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
  "id": "usda-sr-legacy-170900",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cheese, mozzarella, low moisture, part-skim, shredded",
  "nutritionPerBasis": {
    "calcium_mg": 716.0,
    "carbs_g": 8.06,
    "energy_kcal": 304.0,
    "fat_g": 19.7,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 0.23,
    "magnesium_mg": 29.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 537.0,
    "potassium_mg": 131.0,
    "protein_g": 23.6,
    "salt_g": 1.705,
    "sat_fat_g": 11.5,
    "sodium_mg": 682.0,
    "sugar_g": 2.24,
    "vitamin_a_ug": 254.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170900",
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
