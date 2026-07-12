/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-33-links",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171623",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "2-33-links",
      "kind": "unit",
      "label": "2.33 links"
    }
  ],
  "name": "Cheesefurter, cheese smokie, pork, beef",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 1.51,
    "energy_kcal": 1370.0,
    "fat_g": 29.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.08,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 178.0,
    "potassium_mg": 206.0,
    "protein_g": 14.1,
    "salt_g": 2.7,
    "sat_fat_g": 10.5,
    "sodium_mg": 1080.0,
    "sugar_g": 1.51,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171623",
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
