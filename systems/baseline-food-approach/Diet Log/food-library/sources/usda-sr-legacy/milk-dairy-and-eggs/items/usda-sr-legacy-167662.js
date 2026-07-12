/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167662",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Restaurant, Latino, pupusas con queso (pupusas, cheese)",
  "nutritionPerBasis": {
    "calcium_mg": 325.0,
    "carbs_g": 22.4,
    "energy_kcal": 256.0,
    "fat_g": 13.2,
    "fibre_g": 2.9,
    "folate_ug": 3.0,
    "iron_mg": 0.56,
    "magnesium_mg": 36.0,
    "omega3_g": 0.107,
    "phosphorus_mg": 271.0,
    "potassium_mg": 120.0,
    "protein_g": 11.7,
    "salt_g": 1.0,
    "sat_fat_g": 6.48,
    "sodium_mg": 400.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167662",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "milk-dairy-and-eggs",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
