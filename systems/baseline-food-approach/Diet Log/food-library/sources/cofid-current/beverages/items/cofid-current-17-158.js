/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "10 jars, 2 brands",
  "id": "cofid-current-17-158",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coffee, powder, instant",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 4.5,
    "energy_kcal": 75.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 4.6,
    "magnesium_mg": 330.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 3780.0,
    "protein_g": 14.6,
    "salt_g": 0.2025,
    "sat_fat_g": 0.0,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 4.3
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-158",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "beverages",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
