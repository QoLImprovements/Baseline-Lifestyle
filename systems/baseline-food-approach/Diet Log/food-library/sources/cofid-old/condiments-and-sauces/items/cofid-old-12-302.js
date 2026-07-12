/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "15 samples, 2 brands",
  "id": "cofid-old-12-302",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, white, packet mix, dry",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 60.0,
    "energy_kcal": 355.0,
    "fat_g": 10.5,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.6,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 310.0,
    "protein_g": 9.0,
    "salt_g": 10.4,
    "sat_fat_g": 0.0,
    "sodium_mg": 4160.0,
    "sugar_g": 6.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-302",
  "state": "Unspecified",
  "subcategory": "BV",
  "tags": [
    "bv",
    "condiments-and-sauces",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
