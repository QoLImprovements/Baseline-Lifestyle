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
  "id": "usda-sr-legacy-172286",
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
      "key": "jar-beech-nut",
      "kind": "unit",
      "label": "jar Beech nut"
    }
  ],
  "name": "Babyfood, dinner, turkey, rice, and vegetables, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 7.5,
    "energy_kcal": 249.0,
    "fat_g": 1.6,
    "fibre_g": 0.8,
    "folate_ug": 3.0,
    "iron_mg": 0.4,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 107.0,
    "protein_g": 3.8,
    "salt_g": 0.44,
    "sat_fat_g": 0.5,
    "sodium_mg": 176.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 113.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172286",
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
