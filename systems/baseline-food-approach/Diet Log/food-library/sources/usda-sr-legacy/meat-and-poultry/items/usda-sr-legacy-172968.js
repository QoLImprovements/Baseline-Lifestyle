/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-1-hot-dog",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172968",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "serving-1-hot-dog",
      "kind": "unit",
      "label": "serving (1 hot dog)"
    }
  ],
  "name": "Frankfurter, meat",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 4.17,
    "energy_kcal": 1210.0,
    "fat_g": 25.8,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.09,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 206.0,
    "potassium_mg": 152.0,
    "protein_g": 10.3,
    "salt_g": 2.725,
    "sat_fat_g": 7.67,
    "sodium_mg": 1090.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172968",
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
