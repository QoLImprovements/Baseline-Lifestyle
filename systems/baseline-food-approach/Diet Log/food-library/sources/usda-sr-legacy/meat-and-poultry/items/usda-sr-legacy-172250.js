/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172250",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-heinz-strained-2-2-5-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (2.5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-beech-nut-stage-1-2-5-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 1 (2.5 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-second-foods-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber Second Foods (2.5 oz)"
    }
  ],
  "name": "Babyfood, meat, turkey, strained",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 1.4,
    "energy_kcal": 463.0,
    "fat_g": 6.2,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.7,
    "magnesium_mg": 12.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 117.0,
    "potassium_mg": 135.0,
    "protein_g": 11.5,
    "salt_g": 0.1225,
    "sat_fat_g": 1.64,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172250",
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
