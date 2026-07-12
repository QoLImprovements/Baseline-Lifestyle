/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Typically 50% juice with 35-45% sugar. Estimated from high juice drink, undiluted and label data",
  "id": "cofid-current-17-740",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "High juice drink, undiluted",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 42.6,
    "energy_kcal": 161.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.0,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 110.0,
    "protein_g": 0.3,
    "salt_g": 0.0275,
    "sat_fat_g": 0.0,
    "sodium_mg": 11.0,
    "sugar_g": 42.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-740",
  "state": "Unspecified",
  "subcategory": "PCC",
  "tags": [
    "beverages",
    "pcc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
