/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from whole raw egg (12-937) and old code (12-807)",
  "id": "cofid-current-12-961",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, chicken, whole, dried",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 0.0,
    "energy_kcal": 507.0,
    "fat_g": 34.7,
    "fibre_g": 0.0,
    "folate_ug": 181.0,
    "iron_mg": 6.64,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 691.0,
    "potassium_mg": 560.0,
    "protein_g": 48.6,
    "salt_g": 1.4825,
    "sat_fat_g": 9.73,
    "sodium_mg": 593.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 486.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.98,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-961",
  "state": "Dried",
  "subcategory": "CA",
  "tags": [
    "ca",
    "dried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
