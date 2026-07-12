/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-173744",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 12.2,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Beans, kidney, red, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 61.3,
    "energy_kcal": 337.0,
    "fat_g": 1.06,
    "fibre_g": 15.2,
    "folate_ug": 394.0,
    "iron_mg": 6.69,
    "magnesium_mg": 138.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 406.0,
    "potassium_mg": 1360.0,
    "protein_g": 22.5,
    "salt_g": 0.03,
    "sat_fat_g": 0.154,
    "sodium_mg": 12.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173744",
  "state": "Raw",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
