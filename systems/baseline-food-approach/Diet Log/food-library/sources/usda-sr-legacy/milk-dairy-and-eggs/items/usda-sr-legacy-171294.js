/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "26-pieces",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171294",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "26-pieces",
      "kind": "unit",
      "label": "26 pieces"
    }
  ],
  "name": "Ice cream bar, stick or nugget, with crunch coating",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 37.1,
    "energy_kcal": 1500.0,
    "fat_g": 25.3,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 71.0,
    "protein_g": 2.11,
    "salt_g": 0.21,
    "sat_fat_g": 17.9,
    "sodium_mg": 84.0,
    "sugar_g": 21.0,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.25,
    "vitamin_k_ug": 22.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171294",
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
