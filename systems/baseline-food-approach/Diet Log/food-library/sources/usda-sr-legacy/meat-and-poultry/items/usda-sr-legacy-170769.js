/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170769",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 952.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "PIZZA HUT 14\" Sausage Pizza, Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 29.4,
    "energy_kcal": 1200.0,
    "fat_g": 13.5,
    "fibre_g": 2.3,
    "folate_ug": 0.0,
    "iron_mg": 2.45,
    "magnesium_mg": 23.0,
    "omega3_g": 0.191,
    "phosphorus_mg": 191.0,
    "potassium_mg": 211.0,
    "protein_g": 11.9,
    "salt_g": 1.6775,
    "sat_fat_g": 5.46,
    "sodium_mg": 671.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170769",
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
