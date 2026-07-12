/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-25-cup",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174596",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Liverwurst spread",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 5.89,
    "energy_kcal": 1280.0,
    "fat_g": 25.4,
    "fibre_g": 2.5,
    "folate_ug": 30.0,
    "iron_mg": 8.85,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 170.0,
    "protein_g": 12.4,
    "salt_g": 1.75,
    "sat_fat_g": 9.92,
    "sodium_mg": 700.0,
    "sugar_g": 1.65,
    "vitamin_a_ug": 4090.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174596",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
