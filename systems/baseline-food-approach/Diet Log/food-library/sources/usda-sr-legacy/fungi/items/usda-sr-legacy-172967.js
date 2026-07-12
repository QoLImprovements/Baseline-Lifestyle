/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "serving-2-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172967",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "serving-2-oz",
      "kind": "unit",
      "label": "serving 2 oz"
    }
  ],
  "name": "Pate, truffle flavor",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 6.3,
    "energy_kcal": 327.0,
    "fat_g": 28.5,
    "fibre_g": 0.0,
    "folate_ug": 60.0,
    "iron_mg": 3.94,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 138.0,
    "protein_g": 11.2,
    "salt_g": 2.0175,
    "sat_fat_g": 10.1,
    "sodium_mg": 807.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4500.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172967",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "fungi",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
