/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Manufacturer's data (Heinz)",
  "id": "cofid-old-17-304",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dressing, low fat, assorted flavours",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 9.3,
    "energy_kcal": 71.0,
    "fat_g": 3.3,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.4,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 90.0,
    "protein_g": 1.6,
    "salt_g": 1.275,
    "sat_fat_g": 0.5,
    "sodium_mg": 510.0,
    "sugar_g": 6.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-304",
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
