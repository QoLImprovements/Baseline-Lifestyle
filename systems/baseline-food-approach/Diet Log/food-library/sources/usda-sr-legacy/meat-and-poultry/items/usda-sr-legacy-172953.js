/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "5-pieces",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172953",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "5-pieces",
      "kind": "unit",
      "label": "5 pieces"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "serving-5-pieces",
      "kind": "unit",
      "label": "serving 5 pieces"
    }
  ],
  "name": "Sausage, Polish, beef with chicken, hot",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 3.6,
    "energy_kcal": 259.0,
    "fat_g": 19.4,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.88,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 237.0,
    "protein_g": 17.6,
    "salt_g": 3.85,
    "sat_fat_g": 8.01,
    "sodium_mg": 1540.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172953",
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
