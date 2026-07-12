/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Fermented soya bean paste. Literature sources",
  "id": "cofid-old-13-095",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Miso",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 23.5,
    "energy_kcal": 203.0,
    "fat_g": 6.2,
    "fibre_g": 0.0,
    "folate_ug": 33.0,
    "iron_mg": 4.2,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 160.0,
    "protein_g": 13.3,
    "salt_g": 9.125,
    "sat_fat_g": 0.0,
    "sodium_mg": 3650.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-095",
  "state": "Unspecified",
  "subcategory": "DB",
  "tags": [
    "condiments-and-sauces",
    "db",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
