/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170318",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast Foods, crispy chicken filet sandwich, with lettuce and mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 27.4,
    "energy_kcal": 1150.0,
    "fat_g": 13.6,
    "fibre_g": 1.4,
    "folate_ug": 29.0,
    "iron_mg": 1.71,
    "magnesium_mg": 20.0,
    "omega3_g": 0.502,
    "phosphorus_mg": 144.0,
    "potassium_mg": 179.0,
    "protein_g": 10.9,
    "salt_g": 1.5425,
    "sat_fat_g": 2.46,
    "sodium_mg": 617.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170318",
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
