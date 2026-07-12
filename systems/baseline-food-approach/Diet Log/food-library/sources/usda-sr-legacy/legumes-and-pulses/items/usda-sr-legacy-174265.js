/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "2-tbsp",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174265",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peanut butter, chunk style, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 21.6,
    "energy_kcal": 589.0,
    "fat_g": 49.9,
    "fibre_g": 8.0,
    "folate_ug": 92.0,
    "iron_mg": 1.9,
    "magnesium_mg": 160.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 319.0,
    "potassium_mg": 745.0,
    "protein_g": 24.1,
    "salt_g": 1.215,
    "sat_fat_g": 7.61,
    "sodium_mg": 486.0,
    "sugar_g": 8.41,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.3,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174265",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
