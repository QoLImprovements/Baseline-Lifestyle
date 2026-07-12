/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "melon-6-7-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169911",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1280.0,
      "key": "melon-6-7-dia",
      "kind": "unit",
      "label": "melon (6\" - 7\" dia)"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "cup-balls",
      "kind": "unit",
      "label": "cup, balls"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-diced-approx-20-pieces-per-cup",
      "kind": "unit",
      "label": "cup, diced (approx 20 pieces per cup)"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "10-honeydew-balls",
      "kind": "unit",
      "label": "10 honeydew balls"
    },
    {
      "gramsPerUnit": 1000.0,
      "key": "melon-5-1-4-dia",
      "kind": "unit",
      "label": "melon (5-1/4\" dia)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "wedge-1-8-of-5-1-4-dia-melon",
      "kind": "unit",
      "label": "wedge (1/8 of 5-1/4\" dia melon)"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "wedge-1-8-of-6-to-7-dia-melon",
      "kind": "unit",
      "label": "wedge (1/8 of 6\" to 7\" dia melon)"
    }
  ],
  "name": "Melons, honeydew, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 9.09,
    "energy_kcal": 150.0,
    "fat_g": 0.14,
    "fibre_g": 0.8,
    "folate_ug": 19.0,
    "iron_mg": 0.17,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 228.0,
    "protein_g": 0.54,
    "salt_g": 0.045,
    "sat_fat_g": 0.038,
    "sodium_mg": 18.0,
    "sugar_g": 8.12,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169911",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
