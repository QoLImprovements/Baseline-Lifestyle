/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands, including Cadbury's Caramel, Curly Wurly, Rolo, Galaxy Caramel, Toffee Poppets and own brands",
  "id": "cofid-current-17-649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Caramel bars and sweets, chocolate covered",
  "nutritionPerBasis": {
    "calcium_mg": 154.0,
    "carbs_g": 70.2,
    "energy_kcal": 493.0,
    "fat_g": 23.6,
    "fibre_g": 0.7,
    "folate_ug": 4.0,
    "iron_mg": 1.27,
    "magnesium_mg": 37.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 156.0,
    "potassium_mg": 297.0,
    "protein_g": 4.2,
    "salt_g": 0.4,
    "sat_fat_g": 13.78,
    "sodium_mg": 160.0,
    "sugar_g": 56.0,
    "vitamin_a_ug": 93.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-649",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "sea",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
