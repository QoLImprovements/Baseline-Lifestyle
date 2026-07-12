/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168383",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.8,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Canadian bacon, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 1.8,
    "energy_kcal": 609.0,
    "fat_g": 2.78,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.56,
    "magnesium_mg": 27.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 309.0,
    "potassium_mg": 999.0,
    "protein_g": 28.3,
    "salt_g": 2.4825,
    "sat_fat_g": 1.04,
    "sodium_mg": 993.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168383",
  "state": "Fried",
  "subcategory": "Pork Products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
