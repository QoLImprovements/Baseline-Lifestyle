/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173500",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-gerber-third-foods-6-oz",
      "kind": "unit",
      "label": "jar Gerber Third Foods (6 oz)"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-beech-nut-stage-3-6-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 3 (6 oz)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-heinz-junior-3-6-oz",
      "kind": "unit",
      "label": "jar Heinz Junior-3 (6 oz)"
    }
  ],
  "name": "Babyfood, dinner, turkey and rice, junior",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 9.57,
    "energy_kcal": 234.0,
    "fat_g": 0.92,
    "fibre_g": 1.0,
    "folate_ug": 8.0,
    "iron_mg": 0.41,
    "magnesium_mg": 9.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 37.0,
    "potassium_mg": 86.0,
    "protein_g": 2.37,
    "salt_g": 0.0575,
    "sat_fat_g": 0.239,
    "sodium_mg": 23.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173500",
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
