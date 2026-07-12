/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "nut",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170177",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "nut",
      "kind": "unit",
      "label": "nut"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Nuts, hickorynuts, dried",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 18.2,
    "energy_kcal": 2750.0,
    "fat_g": 64.4,
    "fibre_g": 6.4,
    "folate_ug": 40.0,
    "iron_mg": 2.12,
    "magnesium_mg": 173.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 336.0,
    "potassium_mg": 436.0,
    "protein_g": 12.7,
    "salt_g": 0.0025,
    "sat_fat_g": 7.04,
    "sodium_mg": 1.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170177",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
