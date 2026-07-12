/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "frank-1-nlea-serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172949",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "frank-1-nlea-serving",
      "kind": "unit",
      "label": "frank 1 NLEA serving"
    }
  ],
  "name": "Frankfurter, beef, pork, and turkey, fat free",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 11.2,
    "energy_kcal": 456.0,
    "fat_g": 1.59,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.78,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 220.0,
    "protein_g": 12.5,
    "salt_g": 2.2,
    "sat_fat_g": 0.5,
    "sodium_mg": 880.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172949",
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
