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
  "id": "usda-sr-legacy-172965",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Macaroni and cheese loaf, chicken, pork and beef",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 11.6,
    "energy_kcal": 955.0,
    "fat_g": 15.0,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 1.2,
    "magnesium_mg": 27.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 173.0,
    "potassium_mg": 313.0,
    "protein_g": 11.8,
    "salt_g": 0.0075,
    "sat_fat_g": 5.61,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 16.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172965",
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
