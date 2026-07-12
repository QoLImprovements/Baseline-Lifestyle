/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar-heinz-junior-3-2-5-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172248",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-heinz-junior-3-2-5-oz",
      "kind": "unit",
      "label": "jar Heinz Junior-3 (2.5 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-third-foods-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber Third Foods (2.5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, meat, chicken, junior",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 0.0,
    "energy_kcal": 146.0,
    "fat_g": 9.6,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.99,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 122.0,
    "protein_g": 14.0,
    "salt_g": 0.1225,
    "sat_fat_g": 2.47,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172248",
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
