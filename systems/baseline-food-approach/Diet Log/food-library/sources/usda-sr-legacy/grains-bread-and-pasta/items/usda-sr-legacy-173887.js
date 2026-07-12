/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-25-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "1-25-cup-1-nlea-serving",
      "kind": "unit",
      "label": "1.25 cup (1 NLEA serving)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals ready-to-eat, RALSTON CRISP RICE",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 86.2,
    "energy_kcal": 1600.0,
    "fat_g": 1.26,
    "fibre_g": 0.7,
    "folate_ug": 606.0,
    "iron_mg": 32.7,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 106.0,
    "protein_g": 6.69,
    "salt_g": 1.3625,
    "sat_fat_g": 0.36,
    "sodium_mg": 545.0,
    "sugar_g": 12.1,
    "vitamin_a_ug": 1140.0,
    "vitamin_c_mg": 64.5,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173887",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
