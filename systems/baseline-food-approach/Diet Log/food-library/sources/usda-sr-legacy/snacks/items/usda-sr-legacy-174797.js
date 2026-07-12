/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174797",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "2-bar",
      "kind": "unit",
      "label": "2 bar"
    }
  ],
  "name": "Snacks, granola bar, KASHI TLC Bar, crunchy, mixed flavors",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 62.8,
    "energy_kcal": 1870.0,
    "fat_g": 15.0,
    "fibre_g": 10.0,
    "folate_ug": 81.0,
    "iron_mg": 2.7,
    "magnesium_mg": 97.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 333.0,
    "potassium_mg": 545.0,
    "protein_g": 15.0,
    "salt_g": 1.0,
    "sat_fat_g": 1.44,
    "sodium_mg": 400.0,
    "sugar_g": 20.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.3,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174797",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
