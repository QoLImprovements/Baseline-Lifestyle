/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "7 samples, 2 brands; peanuts, oil and salt only",
  "id": "cofid-old-14-830",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peanut butter, wholegrain",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 7.7,
    "energy_kcal": 606.0,
    "fat_g": 53.1,
    "fibre_g": 0.0,
    "folate_ug": 52.0,
    "iron_mg": 2.5,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 370.0,
    "potassium_mg": 680.0,
    "protein_g": 24.9,
    "salt_g": 0.925,
    "sat_fat_g": 9.5,
    "sodium_mg": 370.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-830",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
