/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "McDONALD'S, BIG MAC (without Big Mac Sauce)",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 21.0,
    "energy_kcal": 978.0,
    "fat_g": 11.6,
    "fibre_g": 1.7,
    "folate_ug": 50.0,
    "iron_mg": 2.14,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 192.0,
    "protein_g": 12.8,
    "salt_g": 1.135,
    "sat_fat_g": 4.16,
    "sodium_mg": 454.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 186.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172067",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "condiments-and-sauces",
    "fast-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
