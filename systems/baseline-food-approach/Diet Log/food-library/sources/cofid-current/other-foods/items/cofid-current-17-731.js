/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Manufacturer's data (GlaxoSmithKline)",
  "id": "cofid-current-17-731",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Horlicks, powder",
  "nutritionPerBasis": {
    "calcium_mg": 1910.0,
    "carbs_g": 83.7,
    "energy_kcal": 379.0,
    "fat_g": 3.1,
    "fibre_g": 3.4,
    "folate_ug": 160.0,
    "iron_mg": 10.5,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 686.0,
    "protein_g": 9.4,
    "salt_g": 1.25,
    "sat_fat_g": 1.3,
    "sodium_mg": 500.0,
    "sugar_g": 38.9,
    "vitamin_a_ug": 978.0,
    "vitamin_c_mg": 73.0,
    "vitamin_e_mg": 12.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-731",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "other-foods",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
