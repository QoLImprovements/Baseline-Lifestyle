/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, including tortellini and cappelletti and chicken, ham, beef and bacon fillings",
  "id": "cofid-current-11-732",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, egg, fresh, filled with meat, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 31.3,
    "energy_kcal": 200.0,
    "fat_g": 4.7,
    "fibre_g": 1.9,
    "folate_ug": 24.0,
    "iron_mg": 0.94,
    "magnesium_mg": 20.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 124.0,
    "potassium_mg": 115.0,
    "protein_g": 10.1,
    "salt_g": 0.745,
    "sat_fat_g": 1.81,
    "sodium_mg": 298.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-732",
  "state": "Boiled",
  "subcategory": "AD",
  "tags": [
    "ad",
    "boiled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
