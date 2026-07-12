/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "7 samples, 3 brands. Bottles and cartons",
  "id": "cofid-current-13-607",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Carrot juice",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 5.7,
    "energy_kcal": 24.0,
    "fat_g": 0.1,
    "fibre_g": 0.6,
    "folate_ug": 12.0,
    "iron_mg": 0.2,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 240.0,
    "protein_g": 0.5,
    "salt_g": 0.1275,
    "sat_fat_g": 0.0,
    "sodium_mg": 51.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 1355.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-607",
  "state": "Unspecified",
  "subcategory": "DG",
  "tags": [
    "beverages",
    "dg",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
