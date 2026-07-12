/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples of the same brand (Heinz)",
  "id": "cofid-old-11-356",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, spaghetti, canned in bolognese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 12.2,
    "energy_kcal": 86.0,
    "fat_g": 3.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.7,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 140.0,
    "protein_g": 3.3,
    "salt_g": 1.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 410.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-356",
  "state": "Canned",
  "subcategory": "AT",
  "tags": [
    "at",
    "canned",
    "condiments-and-sauces"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
