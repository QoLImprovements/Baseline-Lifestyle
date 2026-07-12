/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "can-drained-solids",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174285",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 266.0,
      "key": "can-drained-solids",
      "kind": "unit",
      "label": "can drained solids"
    }
  ],
  "name": "Beans, kidney, red, mature seeds, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 21.5,
    "energy_kcal": 124.0,
    "fat_g": 1.05,
    "fibre_g": 5.5,
    "folate_ug": 28.0,
    "iron_mg": 1.5,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 277.0,
    "protein_g": 7.98,
    "salt_g": 0.5775,
    "sat_fat_g": 0.181,
    "sodium_mg": 231.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174285",
  "state": "Canned",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "canned",
    "legumes-and-legume-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
