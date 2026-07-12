/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173484",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "stick",
      "kind": "unit",
      "label": "stick"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-graduate-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber Graduate (2.5 oz)"
    }
  ],
  "name": "Babyfood, meat, turkey sticks, junior",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 1.4,
    "energy_kcal": 787.0,
    "fat_g": 14.2,
    "fibre_g": 0.2,
    "folate_ug": 11.0,
    "iron_mg": 0.92,
    "magnesium_mg": 10.0,
    "omega3_g": 0.102,
    "phosphorus_mg": 120.0,
    "potassium_mg": 120.0,
    "protein_g": 13.7,
    "salt_g": 0.7375,
    "sat_fat_g": 4.14,
    "sodium_mg": 295.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173484",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
