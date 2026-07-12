/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "medium",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170771",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    }
  ],
  "name": "BURGER KING, Onion Rings",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 43.6,
    "energy_kcal": 417.0,
    "fat_g": 25.2,
    "fibre_g": 2.7,
    "folate_ug": 0.0,
    "iron_mg": 0.78,
    "magnesium_mg": 19.0,
    "omega3_g": 0.578,
    "phosphorus_mg": 158.0,
    "potassium_mg": 167.0,
    "protein_g": 3.86,
    "salt_g": 1.94,
    "sat_fat_g": 4.19,
    "sodium_mg": 776.0,
    "sugar_g": 5.43,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 4.92,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170771",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
