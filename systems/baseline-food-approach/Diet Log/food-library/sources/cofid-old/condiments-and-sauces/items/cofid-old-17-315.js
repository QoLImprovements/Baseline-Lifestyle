/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "7 samples, 3 brands (Tabasco, Encona, Calypso)",
  "id": "cofid-old-17-315",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Hot pepper sauce",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 1.7,
    "energy_kcal": 26.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.4,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 220.0,
    "protein_g": 1.6,
    "salt_g": 3.8,
    "sat_fat_g": 0.0,
    "sodium_mg": 1520.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-315",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
