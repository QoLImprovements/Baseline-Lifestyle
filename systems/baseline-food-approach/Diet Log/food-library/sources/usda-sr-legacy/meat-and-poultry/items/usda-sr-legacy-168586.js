/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-shredded",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-168586",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 199.0,
      "key": "package-7-oz",
      "kind": "unit",
      "label": "package (7 oz)"
    }
  ],
  "name": "Nuts, coconut meat, dried (desiccated), sweetened, shredded",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 47.7,
    "energy_kcal": 501.0,
    "fat_g": 35.5,
    "fibre_g": 4.5,
    "folate_ug": 8.0,
    "iron_mg": 1.92,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 337.0,
    "protein_g": 2.88,
    "salt_g": 0.655,
    "sat_fat_g": 31.5,
    "sodium_mg": 262.0,
    "sugar_g": 43.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168586",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "meat-and-poultry",
    "nut-and-seed-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
