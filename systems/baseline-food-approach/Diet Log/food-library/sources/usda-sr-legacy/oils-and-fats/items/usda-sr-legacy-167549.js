/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cup",
  "description": "Snacks",
  "id": "usda-sr-legacy-167549",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, popcorn, oil-popped, microwave, regular flavor, no trans fat",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 45.1,
    "energy_kcal": 583.0,
    "fat_g": 43.6,
    "fibre_g": 8.1,
    "folate_ug": 25.0,
    "iron_mg": 1.98,
    "magnesium_mg": 79.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 199.0,
    "potassium_mg": 182.0,
    "protein_g": 7.29,
    "salt_g": 2.2725,
    "sat_fat_g": 6.82,
    "sodium_mg": 909.0,
    "sugar_g": 0.46,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.43,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167549",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "oils-and-fats",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
