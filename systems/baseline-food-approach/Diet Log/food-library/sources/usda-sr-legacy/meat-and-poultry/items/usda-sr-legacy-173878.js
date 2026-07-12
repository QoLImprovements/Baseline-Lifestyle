/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173878",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    }
  ],
  "name": "Kielbasa, fully cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 4.78,
    "energy_kcal": 1400.0,
    "fat_g": 29.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.93,
    "magnesium_mg": 15.0,
    "omega3_g": 0.312,
    "phosphorus_mg": 199.0,
    "potassium_mg": 304.0,
    "protein_g": 12.4,
    "salt_g": 2.625,
    "sat_fat_g": 9.49,
    "sodium_mg": 1050.0,
    "sugar_g": 2.38,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 16.2,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173878",
  "state": "Fried",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "fried",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
