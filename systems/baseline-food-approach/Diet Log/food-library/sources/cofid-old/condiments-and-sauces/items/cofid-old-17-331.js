/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "7 samples, 3 brands; including parsley, onion and bread",
  "id": "cofid-old-17-331",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 600.0,
    "carbs_g": 64.5,
    "energy_kcal": 338.0,
    "fat_g": 6.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.6,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 470.0,
    "protein_g": 9.3,
    "salt_g": 6.775,
    "sat_fat_g": 0.0,
    "sodium_mg": 2710.0,
    "sugar_g": 12.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-331",
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
