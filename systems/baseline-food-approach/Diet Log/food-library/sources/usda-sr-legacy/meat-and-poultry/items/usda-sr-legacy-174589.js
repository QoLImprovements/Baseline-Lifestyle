/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-1-slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174589",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving-1-slice",
      "kind": "unit",
      "label": "serving (1 slice)"
    }
  ],
  "name": "Oscar Mayer, Bologna (beef)",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.45,
    "energy_kcal": 316.0,
    "fat_g": 29.1,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.36,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 168.0,
    "protein_g": 11.0,
    "salt_g": 2.95,
    "sat_fat_g": 12.8,
    "sodium_mg": 1180.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174589",
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
