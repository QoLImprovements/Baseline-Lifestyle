/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167911",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "HORMEL Canadian Style Bacon",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.87,
    "energy_kcal": 511.0,
    "fat_g": 4.94,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 279.0,
    "protein_g": 16.9,
    "salt_g": 2.55,
    "sat_fat_g": 1.83,
    "sodium_mg": 1020.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167911",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
