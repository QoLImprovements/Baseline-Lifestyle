/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "12-inch-sub",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170711",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 367.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    }
  ],
  "name": "SUBWAY, turkey breast sub on white bread with lettuce and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 169.0,
    "carbs_g": 22.4,
    "energy_kcal": 615.0,
    "fat_g": 2.31,
    "fibre_g": 1.3,
    "folate_ug": 66.0,
    "iron_mg": 1.84,
    "magnesium_mg": 23.0,
    "omega3_g": 0.088,
    "phosphorus_mg": 122.0,
    "potassium_mg": 253.0,
    "protein_g": 9.12,
    "salt_g": 0.7925,
    "sat_fat_g": 0.476,
    "sodium_mg": 317.0,
    "sugar_g": 3.09,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170711",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
