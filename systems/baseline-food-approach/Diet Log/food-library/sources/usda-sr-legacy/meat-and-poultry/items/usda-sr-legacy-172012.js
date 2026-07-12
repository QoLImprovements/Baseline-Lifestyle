/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172012",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Bologna, beef",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 4.29,
    "energy_kcal": 1250.0,
    "fat_g": 26.1,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.29,
    "magnesium_mg": 13.0,
    "omega3_g": 0.113,
    "phosphorus_mg": 154.0,
    "potassium_mg": 351.0,
    "protein_g": 10.9,
    "salt_g": 2.525,
    "sat_fat_g": 10.5,
    "sodium_mg": 1010.0,
    "sugar_g": 2.05,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 15.2,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172012",
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
